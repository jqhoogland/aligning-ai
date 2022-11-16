---
title: Linear Algebra
description: ""
layout: "../../../components/layouts/ChapterLayout.astro"
published: true
authors: 
  - Jesse Hoogland: https://jessehoogland.com
lastUpdated: 2022-11-15
---

# 5.1 Algebraic Structures


:def[abstract algebra]
We'll get to linear algebra in a minute. First, it's worthwhile to emphasize what *algebra* actually is. Here, we're not talking about the *elementary algebra* you learned in school, which is about manipulating variables (read: arithmetic with letters). We're talking about the **abstract algebra** of modern mathematics, which is about studying *algebraic structures*.

:def[algebraic structure]

An **algebraic structure** consists of three things: sets of elements, operations over those sets, and the axioms those operations satisfy. Though mathematicians have developed whole zoos of exotic algebraic structures, we're interested in simpler structures that often involve only a single set of elements and only binary operations.

:def[group]

For example, **a group**, is a set, $G$, equipped with a binary operation, $(\cdot):~G \times G \to G$, that satisfies the following four properties:
- **Closure**: $\id{closure}{\forall a,\ b \in G: a \cdot b \in G}$.
- **Identity**: $\id{identity}{\exists e \in G:\forall a \in G,\ a \cdot e = e \cdot a = a}$.
- **Associativity**: $\id{associativity}{\forall a,\ b,\ c \in G: a \cdot (b \cdot c) = (a \cdot b) \cdot c}$.
- **Invertibility**: $\id{invertibililty}{\forall a\in G,\ \exists a^{-1} \in G:\ a\cdot a^{-1} =  a^{-1} \cdot a = e}$.

:def[abelian group]
An **abelian group** is a group whose elements are also **commutative**:

$$
\t{5.1}{\forall a,\ b \in A: a \cdot b = b \cdot a.} 
$$

::::div{.examples}
### Example 5.1 (Symmetries of the Square)
Consider the group of rotations of a square, $R_4$. We have four elements: the identity, a rotation by $\pi/2$, a rotation by $\pi$, and a rotation by $3\pi/2$. The identity is the identity element, and the rotations are inverses of each other. The group is closed under composition, and the composition is associative. The group is Abelian, because the rotations commute with each other.

If we conside all symmetries of a square (rotations *and* reflections), $D_4$,[^1] we introduce four new elements: two reflections across the vertical/horizontal axes and two reflections across the diagonal axes. The group is still closed under composition, and the composition is still associative. However, the group is no longer abelian because of the reflections.

[^1]: This is called the dihedral group of degree four.

:::details{.exercise}
:summary[**Exercise 5.1** Prove that $R(\square)$ is an Abelian group.]{#ex:5_1}

:::

:::details{.exercise}
:summary[**Exercise 5.2** Prove that $S(\square)$ is a non-Abelian group.]{#ex:5_1}

:::


::::

:def[ring, lattice]

Moving up, **rings** and **lattices** are sets equipped with two binary operations that are commutative and associative. The difference between these two is how the two operations distribute.

For **rings**, the operations ("addition" and "multiplication") are distributive:

$$
\t{5.2}{\forall a,\ b,\ c \in R: a \cdot (b + c) = a \cdot b + a \cdot b.}
$$

For **lattices**, the operations ("join" and "meet") are absorptive:

$$
\t{5.3}{\forall a,\ b \in L: a \wedge (a \vee b) = a \vee (a \wedge b) = a.}
$$

:def[field]

Finally, **fields** are rings with an additional property: every element has an inverse. That is, $\forall a \in F,\ \exists a^{-1} \in F:\ a \cdot a^{-1} = a^{-1} \cdot a = 1$. They're the structure you're most familiar with, as they're the basis of arithmetic. The rational numbers, $\QQ$, are a field, as are the real numbers, $\RR$, and the complex numbers, $\CC$.

# Vector Spaces

:def[vector space]
For this chapter, we're mainly interested in a particular kind of algebraic structure called a **vector space**. Vector spaces are defined over two existing structures:

1. An Abelian group over a set, $V$, of "vectors", whose operation is called **vector addition** ($+_V: V \times V \rightarrow V$) and whose identity element is the zero vector, usually denoted $\b{0}$.

2. A field over a set, $F$, of "scalars" with all the usual arithmetic operations ($\cdot_F$, $+_F$, $-_F$, $1$, $0$). Usually, this field is the real numbers, $\mathbb{R}$, but it could be any field.

A vector space combines these structures through an operation called **scalar multiplication** ($\cdot_S: V \times F \rightarrow V$) that distributes over vector and field addition. That is, for all $\b v,\ \b w \in V$ and for all $a,\ b \in F:$

$$
\t{5.4}{a \cdot_S (\b v +_V \b w) = a \cdot_S \b v +_V a \cdot_S \b w,}
$$

and

$$ 
\t{5.5}{(a +_F b) \cdot_S \b v = a \cdot_S \b v +_V b \cdot_S \b v.}
$$

Moreover, scalar multiplication is "compatible" with field multiplication,

$$
\t{5.6}{\forall \b v \in V,\ \forall a,\ b \in F: (a \cdot_F b) \cdot_S \b v = a \cdot_S (b \cdot_S \b v),}
$$

and there identity of the field addition operation is the identity of the scalar multiplication operation,

$$
\t{5.7}{\forall \b v \in V: 1 \cdot_S \b v = \b v.}
$$

To simplify the notation (at the expense of more ambiguity), we almost always drop the subscripts, and we omit the scalar multiplication operation when it's clear from context. So, we can write:

$$
\t{5.8}{(a + b) (\b v + \b w) = a \b v + a \b w + b \b v + b \b w,}
$$

Be careful to not confuse vector addition, $+_V$, with field addition, $+_F$ or scalar multiplication, $\cdot_S$, with field multiplication, $\cdot_F$. 


:::div{.examples}
### Example 5.2

Often, vectors are introduced as arrows. For example, the vector $\vec{v} = (1, 2, 3)$ is an element of $\mathbb{R}^3$ that points from the origin to the point $(1, 2, 3)$ in $\mathbb{R}^3$. If we add a second vector $\vec{w} = (4, 5, 6)$, we obtain a third vector $\vec{v} + \vec{w} = (5, 7, 9)$ which is also in $\mathbb{R}^3$. If we multiply $\vec{v}$ by a scalar $a = 2$, we get another vector $2 \cdot \vec{v} = (2, 4, 6)$. 

![Insert picture here]()

:::details{.exercise}
:summary[**Exercise 2.1**: Prove that $\mathbb{R}^3$ is a vector space (with vector addition & scalar multiplication defined element-wise.)]{#ex:2_1}

To prove that $\mathbb{R}^3$ is a vector space, we need to show that $\mathbb{R}^3$ is an Abelian group under vector addition, and that element-wise multiplication by a scalar satisfiess the properties of scalar multiplication.

Altogether, this involves ten axioms:

| Axiom | Operation | Meaning | 
| --- | --- | --- |
| Closure 1 | Vector addition | $\b v + \b w \in \mathbb{R}^3$ |
| Associativity | Vector addition | $(\b v + \b w) + \b x = \b v + (\b w + \b x)$ |
| Commutativity | Vector addition | $\b v + \b w = \b w + \b v$ |
| Identity 1 | Vector addition | $\b v + \b 0 = \b v$ |
| Inverse | Vector addition | $\b v + \b v^{-1} = \b 0$ |
| Closure 2 | Scalar multiplication | $a\b v \in \mathbb{R}^3$ |
| Distributivity 1 | Scalar multiplication | $a (\b v + \b w) = a \b v + a \b w$ |
| Distributivity 2 | Scalar multiplication | $(a + b) \b v = a \b v + b \b v$ |
| Compatibility | Scalar multiplication | $(a \cdot b) \b v = a (b \b v)$ |
| Identity 2| Scalar multiplication | $1 \b v = \b v$ |



:::


# Further Reading

For more on algebraic structures, check out [Julie Morunuki's cheatsheet](https://argumatronic.com/posts/2019-06-21-algebra-cheatsheet.html).