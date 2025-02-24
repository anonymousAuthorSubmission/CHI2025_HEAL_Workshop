function CopyToClipboard(){
    var copyText = document.getElementById("promptText");
    copyText.select();
    document.execCommand("copy");
    bulmaToast.toast({ message: 'Prompt copied to clipboard', type: 'is-success', position: 'bottom-center', duration: 2000})
    //alert("Copied the text: " + copyText.value);
    //unselect text
    copyText.selectionStart = copyText.selectionEnd;
}
function ExpandTextarea(){
    var textareaEle = document.getElementById('promptText');
    textareaEle.style.height = `${textareaEle.scrollHeight}px`;
}
