interface IMenu {
  isLoading: boolean;
  isExist: boolean;
  imageURL: string;
}

export interface IMenuStore extends IMenu {
  fetchMenu(): void;
}
