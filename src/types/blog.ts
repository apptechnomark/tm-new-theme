export interface BlogItemsProps {
  imageUrl: string;
  title: string;
  category: string;
  updateDate: string;
  desc: string;
}

export interface BlogsProps {
  content: {
    title: string;
    buttonText: string;
    buttonUrl: string;
    blogItem: BlogItemsProps[];
  };
}
