---
title: Essence of linear algebra
categories: Notes
date: 2025-2-14
tags:
  - Linear_Algebra
cover: https://cdn.jsdelivr.net/gh/kl3inman/Kl3inman.github.io@main/img/Essence%20of%20linear%20algebra/cover.jpg
---

# 学习[线性代数的本质](https://www.bilibili.com/video/BV1ys411472E/?spm_id_from=333.788.videopod.episodes&vd_source=a03e87aa22c41ec60f8fbd1dc803e1cb)后建立的几何直觉

> 以下结论均基于二维或三维向量，省略了教科书上的标准代数定义，旨在建立可视化的几何直觉(visual geometric intuitions).

设$A$为一个线性变换矩阵，我们有：
1. **线性变换** $A$ 保持网格线平行且等距分布，并保持原点不动。常见线性变换有**剪切(sheer)**，e.g. $\begin{bmatrix} 1 & 1 \\ 0 & 1 \end{bmatrix}$；**旋转(rotation)**，e.g. $\begin{bmatrix} 0 & -1 \\ 1 & 0 \end{bmatrix}$.
2. $A$ 的**行列式(determinant)** 表示面积或体积的有向缩放比例，行列式为零时发生降维，所降到的维数取决于**秩(rank)**。
3. **线性方程组** $A\overrightarrow{x}=\overrightarrow{v}$ 的求解：找到经变换 $A$ 后变成 $\overrightarrow{v}$ 的向量 $\overrightarrow{x}$ .
4. $A$ 只要不降维就存在**逆变换(inverse)**。
5. $A$ 的列表示**基向量(basis)** 变换后的位置。
6. 经变换 $A$ 后落到原点的向量组成**零空间(null space or kernel)**.
7. **非方阵(nonsquare matrices)**：不同维度空间之间的映射。
8. **点积(dot product)** 代数与几何定义之间的联系来自于[对偶性](https://www.bilibili.com/video/BV1ys411472E?spm_id_from=333.788.videopod.episodes&vd_source=a03e87aa22c41ec60f8fbd1dc803e1cb&p=10)，详见11分16秒。
9. 两个向量**叉积(cross product)** 数值上等于向量张成的平行四边形有向面积。
	- [三维向量叉积定义及其几何意义](https://www.bilibili.com/video/BV1ys411472E?spm_id_from=333.788.videopod.episodes&vd_source=a03e87aa22c41ec60f8fbd1dc803e1cb&p=12)：
  ![cross product](https://cdn.jsdelivr.net/gh/kl3inman/Kl3inman.github.io@main/img/Essence of linear algebra/cross product.png)
  
10. 经变换 $A$ 后方向不变的向量 $\overrightarrow v$ 为 $A$ 的**特征向量(eigenvector)**，$\overrightarrow v$ 的缩放比例为**特征值(eigenvalue)**。
	  - 对于三维旋转变换，旋转轴上的向量为特征向量，特征值为1.
	  - 结合第6点， $\overrightarrow v\in\text{ker}(A-\lambda I)$.
	  - 对于二维旋转变换 $A=\begin{bmatrix} 0 & -1 \\ 1 & 0 \end{bmatrix}$，其特征多项式为 $\lambda^2+1$，它有特征向量和特征值吗？读者不妨细品。
11. **Cramer's Rule**……