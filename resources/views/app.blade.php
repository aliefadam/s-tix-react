<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">

<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    {{-- Description --}}
    <meta name="description"
        content="Beli tiket konser artis favorit Anda di S-TIX. Dapatkan pengalaman musik terbaik dengan penawaran harga terbaik dan tiket resmi!">
    <meta name="keywords"
        content="tiket konser, beli tiket konser online, konser musik terbaru, tiket konser murah, konser artis terkenal, jadwal konser, tiket konser resmi, konser musik Indonesia, konser internasional, beli tiket online">

    {{-- Title --}}
    <title inertia>{{ config('app.name', 'Laravel') }}</title>

    {{-- Icon --}}
    <link rel="icon" type="image/x-icon" href="{{ asset('imgs/icon.png') }}" />

    <!-- Fonts -->
    <link rel="preconnect" href="https://fonts.bunny.net">
    <link href="https://fonts.bunny.net/css?family=figtree:400,500,600&display=swap" rel="stylesheet" />

    {{-- Poppins --}}
    <link rel="stylesheet" href="https://site-assets.fontawesome.com/releases/v6.6.0/css/all.css">
    <link rel="stylesheet" href="https://site-assets.fontawesome.com/releases/v6.6.0/css/sharp-duotone-solid.css">
    <link rel="stylesheet" href="https://site-assets.fontawesome.com/releases/v6.6.0/css/sharp-thin.css">
    <link rel="stylesheet" href="https://site-assets.fontawesome.com/releases/v6.6.0/css/sharp-solid.css">
    <link rel="stylesheet" href="https://site-assets.fontawesome.com/releases/v6.6.0/css/sharp-regular.css">
    <link rel="stylesheet" href="https://site-assets.fontawesome.com/releases/v6.6.0/css/sharp-light.css">

    {{-- CKEDITOR --}}
    <link rel="stylesheet" href="https://cdn.ckeditor.com/ckeditor5/42.0.1/ckeditor5.css" />

    {{-- Maps --}}
    <script async src="https://maps.googleapis.com/maps/api/js?key={{ env('GOOGLE_MAPS_API_KEY') }}&libraries=places">
    </script>

    <!-- Scripts -->
    @routes
    @viteReactRefresh
    @vite(['resources/js/app.jsx', "resources/js/Pages/{$page['component']}.jsx"])
    @inertiaHead
</head>

<body className="font-sans antialiased">
    @inertia

    {{-- Instascan --}}
    {{-- <script src="https://cdnjs.cloudflare.com/ajax/libs/instascan/1.0.0/index.js"
        integrity="sha512-QblNATV/gin5FC8tqTM2gfCMBei2qCzTte4O6CxGp8KQ5BgC5vNNGv99uTBvzmq+AFFYFoUNhowGOOJNTIBy6A=="
        crossorigin="anonymous" referrerpolicy="no-referrer"></script> --}}
</body>

</html>
