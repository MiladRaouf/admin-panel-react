import Table from "../../../components/table/Table";

const Products = () => {
    const theadObj = [
        {
            id: 1,
            name: 'نام محصول'
        },
        {
            id: 2,
            name: 'تعداد'
        },
        {
            id: 3,
            name: 'قیمت'
        }
    ]

    const tbodyObj = [
        {
            id: 1,
            name: 'دلار',
            count: 120,
            price: 100_000
        }, {
            id: 1,
            name: 'زیتون پرورده',
            count: 130,
            price: 200_000
        }, {
            id: 1,
            name: 'ترشی لیته',
            count: 80,
            price: 235_000
        }
    ]

    return (
        <section id="product" className="container-xxl">
            <Table theadObj={theadObj} tbodyObj={tbodyObj} />
        </section>
    );
};

export default Products;