export const useArrangeDate = (createdDay: string) => {
    const publishedAt = new Date(createdDay).toLocaleDateString("ja-JP", {
        year: "numeric",
        month: "numeric",
        day: "numeric",
    });

    return publishedAt;
}