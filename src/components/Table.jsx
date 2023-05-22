const Table = ({ theadObj, tbodyObj }) => {
    return (
        <table>
            <thead>
                <tr>
                    <th>#</th>
                    {
                        theadObj.map(item => <th key={item.id}>{item.name}</th>)
                    }
                </tr>
            </thead>
            <tbody>
                {
                    tbodyObj.map((item, index) => (
                        <tr>
                            <td>{+index + 1}</td>
                            <td>{item.name}</td>
                            <td>{item.count} عدد</td>
                            <td>{item.price} تومان</td>
                        </tr>
                    ))
                }
            </tbody>
        </table>
    );
};

export default Table;