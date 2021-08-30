import React from 'react';
import data from "../data/testProduct.json";

function TestProduct(props) {
    return (
        <div>
            {data.testProduct.map((items, index) => {
                return (
                    <table >
                        <tr>
                            <th>
                                {items.label}
                            </th>
                        </tr>
                        <tr>
                            <td>
                                {items.content}
                            </td>
                        </tr>

                    </table>
                )
            })
            }
        </div>
    );
}

export default TestProduct;