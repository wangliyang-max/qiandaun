void PostOrder(BiTree T, int x)
{
    InitStack(S);               //初始化栈
    BiTree p = T;               //p为遍历指针
    BiTree r = NULL;            //r为辅组指针，指向最近访问过的结点。也可以在结点中增加一个标志域tag，记录是否已被访问
    while (p || !StackEmpty(S)) //栈不空或p不空时循环
    {
        if (p) //左子树
            push(S, p);
        p = p->lchild; //左孩子不空，一直向左走
    }
    else //右子树， p==null说明该节点的左子树被处理完了，访问右子树
    {
        GetTop(S, p); //读栈顶结点（非出栈）

        // 为什么写在这？因为要却道每个节点都被判断到，而我们肯定会寻找每个结点的右子树，所以肯定会被判断到。  但是每个结点的左子树也会被判断呀
        // p为null的时候就不能访问左子树，如果判断函数在左子树的时候，当p为null就不能访问GetTop(S, p);，接下来访问p->rchild 就回出错
        if (p->data == x) //判断是否找到结点
        {
            while (!StackEmpty(S)) //则将栈中所有元素依次出栈打印
            {
                pop(S, p);
                visit(p); //访问该结点
            }
            return 0; //执行完毕返回
        }

        if (p->rchild && p->rchild != r) //若右子树存在，且未被访问过
        {
            p = p->rchild; //转向右
            push(S, p);
            p = p->lchild; //查看右子树是否有左节点
        }
        else //该结点不是目标节点，又是一个叶子节点，即不可能是父节点，就进行弹出
        {
            pop(S, p);
            r = p;    //记录最近访问过的废弃结点
            p = NULL; //p指向的结点被弹出，置为NULL；不置空会陷入死循环

            //  p = NULL是为了防止p从左子树进入
            //  p->rchild != r是为了防止p作为右子树进入
        }
    }
}
}