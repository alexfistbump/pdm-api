import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';
import { Post } from '@prisma/client'
import { NewPost } from './entities/createPost';

@Injectable()
export class PostService {
    constructor(private prisma: PrismaService){}

    async posts(): Promise<Post[]> {
        return this.prisma.post.findMany();
    }

    async createPost(input: NewPost): Promise<Post> {
        return this.prisma.post.create({
            data : input
        });
    }
}
