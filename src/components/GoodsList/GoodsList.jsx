import goodsData  from "../../data/coffee.json";
import { GoodInfo } from "./GoodInfo/GoodInfo";
export const GoodsList = ()  => (<ul className="goods__list">
          {goodsData.map((good) => (
            <GoodInfo
              key={good._id.$oid}
              good={good}
            />
          ))}
        </ul>);