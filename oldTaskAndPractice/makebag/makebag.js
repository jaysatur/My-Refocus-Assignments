function makeBag(name)
{
    function getNotebook()
    {
        return `Book of ${name}`;
    }
    return getNotebook();
}

const bagOFMarc = makeBag("Marc");

console.log(typeof bagOFMarc);
console.log(bagOFMarc);
