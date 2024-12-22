import {
    ClassicEditor,
    Font,
    FontSize,
    Autoformat,
    Bold,
    Italic,
    Underline,
    BlockQuote,
    Base64UploadAdapter,
    CKFinder,
    CKFinderUploadAdapter,
    CloudServices,
    CKBox,
    Essentials,
    Heading,
    Image,
    ImageCaption,
    ImageResize,
    ImageStyle,
    ImageToolbar,
    ImageUpload,
    PictureEditing,
    Indent,
    IndentBlock,
    Link,
    List,
    MediaEmbed,
    Mention,
    Paragraph,
    PasteFromOffice,
    Table,
    TableColumnResize,
    TableToolbar,
    TextTransformation,
    Alignment,
    TableProperties,
    TableCellProperties,
} from "ckeditor5";

const InitEditor = ({ id, setData, defaultValue = "" }) => {
    ClassicEditor.create(document.querySelector(`#${id}`), {
        licenseKey: "GPL",
        plugins: [
            Essentials,
            Bold,
            Italic,
            Font,
            FontSize,
            Paragraph,
            List,
            BlockQuote,
            Bold,
            CKFinder,
            CKFinderUploadAdapter,
            CloudServices,
            Essentials,
            Heading,
            Image,
            ImageCaption,
            ImageResize,
            ImageStyle,
            ImageToolbar,
            ImageUpload,
            Base64UploadAdapter,
            Indent,
            IndentBlock,
            Italic,
            Link,
            List,
            Mention,
            Paragraph,
            PasteFromOffice,
            PictureEditing,
            Table,
            TableColumnResize,
            TableToolbar,
            TextTransformation,
            Underline,
            Alignment,
            TableProperties,
            TableCellProperties,
        ],
        toolbar: [
            "undo",
            "redo",
            "|",
            "heading",
            "|",
            "bold",
            "italic",
            "underline",
            "|",
            "link",
            "bulletedList",
            "numberedList",
            "|",
            "alignment:left",
            "alignment:center",
            "alignment:right",
            "alignment:justify",
        ],
        heading: {
            options: [
                {
                    model: "paragraph",
                    title: "Paragraph",
                    class: "ck-heading_paragraph",
                },
                {
                    model: "heading1",
                    view: "h1",
                    title: "Heading 1",
                    class: "ck-heading_heading1",
                },
                {
                    model: "heading2",
                    view: "h2",
                    title: "Heading 2",
                    class: "ck-heading_heading2",
                },
                {
                    model: "heading3",
                    view: "h3",
                    title: "Heading 3",
                    class: "ck-heading_heading3",
                },
                {
                    model: "heading4",
                    view: "h4",
                    title: "Heading 4",
                    class: "ck-heading_heading4",
                },
            ],
        },
        image: {
            resizeOptions: [
                {
                    name: "resizeImage:original",
                    label: "Default image width",
                    value: null,
                },
                {
                    name: "resizeImage:50",
                    label: "50% page width",
                    value: "50",
                },
                {
                    name: "resizeImage:75",
                    label: "75% page width",
                    value: "75",
                },
            ],
            toolbar: [
                "imageTextAlternative",
                "toggleImageCaption",
                "|",
                "imageStyle:inline",
                "imageStyle:wrapText",
                "imageStyle:breakText",
                "|",
                "resizeImage",
            ],
        },
        link: {
            addTargetToExternalLinks: true,
            defaultProtocol: "https://",
        },
        table: {
            contentToolbar: ["tableColumn", "tableRow", "mergeTableCells"],
        },
        alignment: {
            options: ["left", "center", "right", "justify"],
        },
    })
        .then((editor) => {
            editor.setData(defaultValue);
            editor.model.document.on("change:data", () => {
                const content = editor.getData();
                setData((prevData) => {
                    return {
                        ...prevData,
                        [id]: content,
                    };
                });
            });
        })
        .catch(/* ... */);
};

export default InitEditor;
