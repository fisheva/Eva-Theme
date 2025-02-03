import * as vscode from 'vscode';
import * as path from 'path';
import * as fs from 'fs';

export function activate(context: vscode.ExtensionContext) {
    const currentVersion = '2.7.6'; // 当前插件版本
    const previousVersion = context.globalState.get<string>('extensionVersion');

    if (!previousVersion) {
        // 首次安装
        showMarkdownPreview('欢迎使用', getWelcomeMarkdownContent());
    } else if (previousVersion !== currentVersion) {
        // 更新版本
        showMarkdownPreview('更新日志', getUpdateMarkdownContent(previousVersion, currentVersion));
    }

    // 更新版本号
    context.globalState.update('extensionVersion', currentVersion);
}

function showMarkdownPreview(title: string, markdownContent: string) {
    // 创建一个临时 Markdown 文件
    const tempDir = path.join(__dirname, 'temp');
    if (!fs.existsSync(tempDir)) {
        fs.mkdirSync(tempDir);
    }

    const tempFilePath = path.join(tempDir, `${title}.md`);
    fs.writeFileSync(tempFilePath, markdownContent, 'utf8');

    // 调用 VSCode 内置 Markdown 渲染功能
    vscode.commands.executeCommand('markdown.showPreview', vscode.Uri.file(tempFilePath));
}

function getWelcomeMarkdownContent(): string {
    return `
### Happy Spring Festival! See what's new of Eva Theme in 2025.

### [Eva Theme for JetBrains](https://plugins.jetbrains.com/plugin/26338-eva-theme) has coming! :)

<img src="https://raw.githubusercontent.com/fisheva/Eva-Theme/refs/heads/master/VSCode/images/screenshots/Eva-Dark-IDEA.png" referrerpolicy="no-referrer" style="max-width:100%;">
`;
}

function getUpdateMarkdownContent(previousVersion: string, currentVersion: string): string {
    return `
### Happy Spring Festival! See what's new of Eva Theme in 2025.

### [Eva Theme for JetBrains](https://plugins.jetbrains.com/plugin/26338-eva-theme) has coming! :)

<img src="https://raw.githubusercontent.com/fisheva/Eva-Theme/refs/heads/master/VSCode/images/screenshots/Eva-Dark-IDEA.png" referrerpolicy="no-referrer" style="max-width:100%;">
`;
}