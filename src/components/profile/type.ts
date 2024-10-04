import { TweetType } from "../tweet/type";

export interface User {
  userId: number;
  username: string;
  name: string;
  profilePicture: string;
  bio: string;
  followersCount: number;
  followingCount: number;
  website?: string; 
  coverImage?: string; 
  tweets: TweetType[];
}