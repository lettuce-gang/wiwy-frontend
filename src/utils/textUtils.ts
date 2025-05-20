export function getPostPosition(name: string | null | undefined, postposition1 = '은', postposition2 = '는'): string {
    if (!name) return postposition2;

    const lastChar = name.charAt(name.length - 1);
    const uni = lastChar.charCodeAt(0);

    if (uni < 0xac00 || uni > 0xd7a3) {
        return postposition2; // 한글이 아닐 때는 기본 postposition2
    }

    const lastConsonant = (uni - 0xac00) % 28;

    return lastConsonant === 0 ? postposition2 : postposition1;
}

export function addCommaToNumberText(num: number): string {
    return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
}
