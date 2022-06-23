import { Field, InputType, ObjectType } from "@nestjs/graphql";

@ObjectType()
@InputType()
export class NewPost {
    @Field()
    title: string;
    @Field()
    published: boolean;
}