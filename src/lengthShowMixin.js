export const lengthShowMixin = {
    computed: {
        lengthShow() {
            return this.secondText + " (length is " + this.secondText.length + ")";
        }
    },
}