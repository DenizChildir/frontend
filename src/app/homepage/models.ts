
export interface Reply {
  id: number;
  tweetId: number;
  userName: string;
  title: string;
  postText: string;
  image: string | null;
  date: string;
}

export interface Post {
  id: number;
  userName: string;
  title: string;
  postText: string;
  image: string | null;
  date: string;
  replies: Reply[];
}
