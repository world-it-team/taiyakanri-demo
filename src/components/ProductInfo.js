import React from 'react';
import data from "../data/productInfo.json";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({

}));

function ProductInfo(props) {

    return (
        <div>
            {data.productInfo.map((items, index) => {
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

export default ProductInfo;