console.log('Objects');
// 1
const getText = {
    getTextForChange : 'this is lowercase text',
    get getLowerCaseText() {
        return this.getTextForChange  ;
    },
    set  changeUpperCase (value) {
        this.getTextForChange   = value.toUpperCase();
    }
};
getText.getLowerCaseText;
console.log(getText.getTextForChange );
getText.changeUpperCase= 'this is uppercase text';
console.log(getText.getTextForChange );
