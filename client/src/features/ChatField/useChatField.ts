export function useChatField() {
    const onSendClick = () => {
        console.log("Message sent");
    }

    return { onSendClick };
}