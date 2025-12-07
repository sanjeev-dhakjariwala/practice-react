export interface useFetchProps {
  url: string;
}

export interface ProductType {
  id?: string;
  title?: string;
  price?: number;
  description?: string;
  category?: string;
  image?: string;
}

export interface SearchProps {
  placeholder?: string;
  filterData?: (searchText: string) => void;
}