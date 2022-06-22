
/*
 * -------------------------------------------------------
 * THIS FILE WAS AUTOMATICALLY GENERATED (DO NOT MODIFY)
 * -------------------------------------------------------
 */

import { Field, InputType, ObjectType } from "@nestjs/graphql";

/* tslint:disable */
/* eslint-disable */
@ObjectType()
@InputType()
export class NewPost {
    @Field()
    title: string;
}

export class UpdatePost {
    id: string;
    title?: Nullable<string>;
}

@ObjectType()
export class Post {
    @Field()
    id: string;
    @Field()
    title: string;
}

export abstract class IQuery {
    abstract posts(): Post[] | Promise<Post[]>;

    abstract post(id: string): Nullable<Post> | Promise<Nullable<Post>>;
}

export abstract class IMutation {
    abstract createPost(input?: Nullable<NewPost>): Post | Promise<Post>;

    abstract updatePost(input?: Nullable<UpdatePost>): Nullable<Post> | Promise<Nullable<Post>>;

    abstract deletePost(id: string): Nullable<Post> | Promise<Nullable<Post>>;
}

type Nullable<T> = T | null;
