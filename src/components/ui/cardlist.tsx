// import { FC } from "react";
// import TrendingCard from "../Cards/TrendingCard";

// type TCardContent<T> = {
//   data: T[];
// };

// type TCardList<T> = {
//   isVetical?: boolean;
//   sectionHeading: string;
//   dataList: TCardContent<T>[];
// };

// const CardList: FC<T> = ({ sectionHeading, data }: TCardList<T>) => {
//   return (
//     <section className={``}>
//       <h2 className="text-3xl capitalize my-3 text-gray-200">
//         {sectionHeading}
//       </h2>
//       <ul className="flex items-center gap-4 overflow-x-auto snap-x ">
//         {/* {data?.slice(0, 10)?.map((anime) => (
//           <TrendingCard cardContent={anime} key={anime.mal_id} />
//         ))} */}
//       </ul>
//     </section>
//   );
// };

// export default CardList;
