import { Field, ObjectType } from "@nestjs/graphql";

@ObjectType()
export class Post {
    @Field()
    id: string;
    @Field()
    title: string;
    @Field()
    published: boolean;
}