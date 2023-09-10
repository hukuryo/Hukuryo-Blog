export const useArrangeDate = (createdDay: string) => {
    return new Date(createdDay).toLocaleDateString("ja-JP", {
        year: "numeric",
        month: "numeric",
        day: "numeric",
    });
}