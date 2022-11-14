---
title: Linear Algebra
description: ""
layout: "../../../components/layouts/ChapterLayout.astro"
published: true
---

# Structure


:def[Abstract algebra]
We'll get to linear algebra in a minute. First, it's worthwhile to emphasize what *algebra* actually is. Here, we're talking about **abstract algebra** or **modern algebra**, :def[Elementary algebra]the study of algebraic structures. This is in contrast to the **elementary algebra** you learned in primary school, which concerns the manipulation of variables.

:def[Algebraic Structure]

An **algebraic structure** consists of three things: a collection of sets, a collection of operations over elements of those sets, and a collection of axioms that those operations satisfy. Though mathematicians have developed whole zoos of exotic algebraic structures, we're interested in a simpler set of structures that often concern only a single set of elements and binary operations.

:def[Group]

For example, **a group**, is a set, $G$, equipped with a binary operation $\cdot$ that satisfies the following four properties:
- **Closure**: $\forall a,\ b \in G: a \cdot b \in G$.
- **Identity**: $\exists e \in G:\forall a \in G,\ a \cdot e = e \cdot a = a$.
- **Associativity**: $\forall a,\ b,\ c \in G: a \cdot (b \cdot c) = (a \cdot b) \cdot c$.
- **Invertibility**: $\forall a\in G,\ \exists a^{-1} \in G:\ a\cdot a^{-1} =  a^{-1} \cdot a = e$.

:def[Abelian Group]
An **Abelian group** is a group whose elements are also **commutative**:

$$\forall a,\ b \in A: a \cdot b = b \cdot a.$$

:::div{.examples}
Consider the group of rotations of a square. We have four elements: the identity, a rotation by $\pi/2$, a rotation by $\pi$, and a rotation by $3\pi/2$. The identity is the identity element, and the rotations are inverses of each other. The group is closed under composition, and the composition is associative. The group is Abelian, because the rotations commute with each other.

If we conside all symmetries of a square (rotations and reflections), we introduce two new elements: a reflection across the $x$-axis and a reflection across the $y$-axis. The group is still closed under composition, and the composition is still associative. However, the group is no longer Abelian because of the reflections.
:::

:def[Ring, Lattice]

Moving up, **rings** and **lattices** are sets equipped with two binary operations that are commutative and associative. The difference between these two is how the two operations distribute.

For **rings**, the operations ("addition" and "multiplication") are distributive:

$$\forall a,\ b,\ c \in R: a \cdot (b + c) = a \cdot b + a \cdot b$$

For **lattices**, the operations ("join" and "meet") are absorptive:

$$\forall a,\ b \in L: a \wedge (a \vee b) = a \vee (a \wedge b) = a$$

:def[Field]

Finally, **fields** are rings with an additional property: every element has an inverse. That is, $\forall a \in F,\ \exists a^{-1} \in F:\ a \cdot a^{-1} = a^{-1} \cdot a = 1$. They're the structure you're most familiar with, as they're the basis of arithmetic. The rational numbers, $\mathbb{Q}$, are a field, as are the real numbers, $\mathbb{R}$, and the complex numbers, $\mathbb{C}$.

# Vector Spaces

:def[Vector Space]
For this chapter, we're mainly interested in a particular kind of algebraic structure called a **vector space**. Vector spaces are defined over two existing structures:

1. An Abelian group over a set, $V$, of "vectors", whose operation is called **vector addition** ($+_V: V \times V \rightarrow V$) and whose identity element is the zero vector, usually denoted $\mathbf{0}$.

2. A field over a set, $F$, of "scalars" with all the usual arithmetic operations ($\cdot_F$, $+_F$, $-_F$, $1$, $0$). Usually, this field is the real numbers, $\mathbb{R}$, but it could be any field.

A vector space combines these structures through an operation called **scalar multiplication** ($\cdot_S: V \times F \rightarrow V$) that distributes over vector and field addition. That is, for all $\mathbf v,\ \mathbf w \in V$ and for all $a,\ b \in F:$

$$ a \cdot_S (\mathbf v +_V \mathbf w) = a \cdot_S \mathbf v +_V a \cdot_S \mathbf w,$$

and

$$ (a +_F b) \cdot_S \mathbf v = a \cdot_S \mathbf v +_V b \cdot_S \mathbf v.$$

Moreover, scalar multiplication is "compatible" with field multiplication,

$$\forall \mathbf v \in V,\ \forall a,\ b \in F: (a \cdot_F b) \cdot_S \mathbf v = a \cdot_S (b \cdot_S \mathbf v),$$

and there identity of the field addition operation is the identity of the scalar multiplication operation,

$$\forall \mathbf v \in V: 1 \cdot_S \mathbf v = \mathbf v.$$

To simplify the notation (at the expense of more ambiguity), we almost always drop the subscripts, and we omit the scalar multiplication operation when it's clear from context. So, we can write:

$$(a + b) (\mathbf v + \mathbf w) = a \mathbf v + a \mathbf w + b \mathbf v + b \mathbf w,$$

Be careful to not confuse vector addition, $+_V$, with field addition, $+_F$ or scalar multiplication, $\cdot_S$, with field multiplication, $\cdot_F$. 


:::div{.examples}

Often, vectors are introduced as arrows. For example, the vector $\vec{v} = (1, 2, 3)$ is an element of $\mathbb{R}^3$ that points from the origin to the point $(1, 2, 3)$ in $\mathbb{R}^3$. If we add a second vector $\vec{w} = (4, 5, 6)$, we obtain a third vector $\vec{v} + \vec{w} = (5, 7, 9)$ which is also in $\mathbb{R}^3$. If we multiply $\vec{v}$ by a scalar $a = 2$, we get another vector $2 \cdot \vec{v} = (2, 4, 6)$. 

![Insert picture here]()

:::details{.exercise}
:summary[**Exercise 2.1**: Prove that $\mathbb{R}^3$ is a vector space (with vector addition & scalar multiplication defined element-wise.)]{#ex:2_1}

To prove that $\mathbb{R}^3$ is a vector space, we need to show that $\mathbb{R}^3$ is an Abelian group under vector addition, and that element-wise multiplication by a scalar satisfiess the properties of scalar multiplication.

Altogether, this involves ten axioms:

| Axiom | Operation | Meaning | 
| --- | --- | --- |
| Closure 1 | Vector addition | $\mathbf v + \mathbf w \in \mathbb{R}^3$ |
| Associativity | Vector addition | $(\mathbf v + \mathbf w) + \mathbf x = \mathbf v + (\mathbf w + \mathbf x)$ |
| Commutativity | Vector addition | $\mathbf v + \mathbf w = \mathbf w + \mathbf v$ |
| Identity 1 | Vector addition | $\mathbf v + \mathbf 0 = \mathbf v$ |
| Inverse | Vector addition | $\mathbf v + \mathbf v^{-1} = \mathbf 0$ |
| Closure 2 | Scalar multiplication | $a\mathbf v \in \mathbb{R}^3$ |
| Distributivity 1 | Scalar multiplication | $a (\mathbf v + \mathbf w) = a \mathbf v + a \mathbf w$ |
| Distributivity 2 | Scalar multiplication | $(a + b) \mathbf v = a \mathbf v + b \mathbf v$ |
| Compatibility | Scalar multiplication | $(a \cdot b) \mathbf v = a (b \mathbf v)$ |
| Identity 2| Scalar multiplication | $1 \mathbf v = \mathbf v$ |



:::
