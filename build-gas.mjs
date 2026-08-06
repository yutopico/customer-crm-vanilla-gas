// Node.jsでファイルを読み書きする機能を読み込む
import {
  readFile,
  writeFile,
} from "node:fs/promises";

// ファイルの場所を安全に組み立てる機能
import {
  resolve,
} from "node:path";

// このファイルを実行した場所を基準にする
const projectRoot =
  process.cwd();

// VS Codeで編集する元ファイルを読み込む
const [
  indexHtml,
  stylesheet,
  javascript,
] = await Promise.all([
  readFile(
    resolve(
      projectRoot,
      "index.html"
    ),
    "utf8"
  ),

  readFile(
    resolve(
      projectRoot,
      "style.css"
    ),
    "utf8"
  ),

  readFile(
    resolve(
      projectRoot,
      "script.js"
    ),
    "utf8"
  ),
]);

// 通常のCSS読み込みを、GAS用の読み込みへ変更する
const appHtmlWithStylesheet =
  indexHtml.replace(
    /<link\s+rel=["']stylesheet["']\s+href=["']style\.css["']\s*\/?>/i,
    '<?!= include("Stylesheet"); ?>'
  );

// 通常のJavaScript読み込みを、GAS用の読み込みへ変更する
const gasAppHtml =
  appHtmlWithStylesheet.replace(
    /<script\s+src=["']script\.js["']\s*><\/script>/i,
    '<?!= include("JavaScript"); ?>'
  );

// 正しく置き換えられたか確認する
if (
  gasAppHtml === indexHtml ||
  !gasAppHtml.includes(
    '<?!= include("Stylesheet"); ?>'
  ) ||
  !gasAppHtml.includes(
    '<?!= include("JavaScript"); ?>'
  )
) {
  throw new Error(
    "index.html内のCSSまたはJavaScriptの読み込み箇所を変換できませんでした。"
  );
}

// GAS側のファイルへ書き出す
await Promise.all([
  writeFile(
    resolve(
      projectRoot,
      "gas",
      "App.html"
    ),
    gasAppHtml,
    "utf8"
  ),

  writeFile(
    resolve(
      projectRoot,
      "gas",
      "Stylesheet.html"
    ),
    `<style>\n${stylesheet}\n</style>\n`,
    "utf8"
  ),

  writeFile(
    resolve(
      projectRoot,
      "gas",
      "JavaScript.html"
    ),
    `<script>\n${javascript}\n</script>\n`,
    "utf8"
  ),
]);

console.log(
  "GAS用ファイルを更新しました。"
);