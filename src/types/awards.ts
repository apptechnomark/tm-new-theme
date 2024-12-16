export interface AwardsListProps {
  imgUrl: string;
  altText: string;
}
export interface AwardsProps {
  content: {
    title: string;
    awardList: AwardsListProps[];
  };
}
