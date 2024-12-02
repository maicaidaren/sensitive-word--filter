const sensitiveWords = [
    "屁股", "高潮", "抽插", "性器", "肉棒", "阴茎", "后庭", "阴唇", "暴露", "吮吸", "浪叫",
    "肉粒", "荡妇", "精液", "性事", "肉壁", "性交", "接吻", "阳具", "叫床", "骚逼", "下贱",
    "激情", "放荡", "情色", "爱爱", "交配", "性欲", "阴核", "成人", "色情", "肉唇", "肉缝",
    "外阴", "性行为", "干你", "干我", "干他", "干她", "干它", "妈的", "你妈的", "他妈的"
];

function replaceSensitiveWords(text) {
    sensitiveWords.forEach(word => {
        const regex = new RegExp(word, "g");
        const replacement = word.split('').join('/');
        text = text.replace(regex, replacement);
    });
    return text;
}

// 示例调用
console.log(replaceSensitiveWords("示例文本：性交、妈的、他妈的、接吻、骚逼"));
