export const isLiked = (likes = [], userId) => {
    return likes?.some(like => like === userId);
}