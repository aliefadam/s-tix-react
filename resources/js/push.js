import { execSync } from "child_process";
import readline from "readline";

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

rl.question("Enter commit message: ", (message) => {
    try {
        execSync("git add .");
        execSync(`git commit -m "${message}"`);
        execSync("git push origin main");
        console.log("Changes pushed successfully!");
    } catch (error) {
        console.error("Error during push:", error.message);
    } finally {
        rl.close();
    }
});
