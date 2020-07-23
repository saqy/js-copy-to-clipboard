export const copyToClipboard = (text: string) => {
    if ((window as any).clipboardData && (window as any).clipboardData.setData) {
        return (window as any).clipboardData.setData("Text", text);

    }
    else if (document.queryCommandSupported && document.queryCommandSupported("copy")) {
        var textarea = document.createElement("textarea");
        textarea.textContent = text;
        textarea.style.position = "fixed"; 
        document.body.appendChild(textarea);
        textarea.select();
        try {
            return document.execCommand("copy"); 
        }
        catch (ex) {
            console.warn("Failed to copy.", ex);
            return false;
        }
        finally {
            document.body.removeChild(textarea);
        }
    }
}
