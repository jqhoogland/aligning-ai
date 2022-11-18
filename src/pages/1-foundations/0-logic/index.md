---
title: Logic
description: ""
layout: "../../../components/layouts/ChapterLayout.astro"
published: true
authors: 
  - Jesse Hoogland: https://jessehoogland.com
lastUpdated: 2022-11-15
---

There are (roughly) two ways to make sense of the world: the proof and the experiment. 

Proofs are the language of mathematics and are rooted in logic, the subject of this chapter. Logic studies the rules that govern how we can draw conclusions from premises. 

Experiments are the language of science and are rooted in probability theory, the subject of the next chapter. Probability theory studies the rules that govern how we can draw conclusions from evidence[^1].

[^1]: Throughout this book, we'll be sticking to a Bayesian framing. See chapter 4. In this light, every interaction with reality can be seen as an experiment.

Logic and probability theory codify what it means to reason. As such, they've been the basis of artificial intelligence since day one. Since that time, the field has shifted its attention more towards probability theory and away from logic. Today's state-of-the-art AI systems are not the symbolic systems of the past.
 
But even if current ML techniques scale to full generality and explicit logical reasoners prove to be unnecessary, logic remains central to understanding much of the subsequent mathematics we'll need to study AI (in particular, [computational complexity theory](/1-foundations/5-computer-science)). It's also key to alignment agendas tackling foundational questions of [agency, intelligence, self-reference, causality, and reflective stability](/3-problems/2-agent-foundations).

# Propositional Logic

Propositional logic begins with propositions, which are statements that can be either true or false, and combines them using logical operators. The most basic operators are the logical connectives (in order of precedence):

- **Negation** ("not"): $\neg P$ is true if and only if $P$ is false.
- **Conjunction** ("and"): $P \wedge Q$ is true if and only if both $P$ and $Q$ are true.
- **Disjunction** ("or"): $P \vee Q$ is true if and only if either $P$ or $Q$ are true. 
- **Material Implication** ("if...then", "implies"): $P \rightarrow Q$ is true unless $P$ is true and $Q$ is false.
- **Biconditional** ("if and only if", "iff"): $P \leftrightarrow Q$ is true if and only if $P \rightarrow Q$ and $Q \rightarrow P$ are both true.

These rules are summarized in the following truth table:

::::figure

| $P\quad$ | $Q\quad$ | $\neg P\ \ $ | $P \wedge Q$ | $P \vee Q$ | $P \rightarrow Q$ | $P \leftrightarrow Q$ |
| - | - | - | - | - | - | - |
| $\color{blue} T$ | $\color{blue} T$ | $\color{red} F$ | $\color{blue} T$ | $\color{blue} T$ | $\color{blue} T$ | $\color{blue} T$ |
| $\color{blue} T$ | $\color{red} F$ | $\color{red} F$ | $\color{red} F$ | $\color{blue} T$ | $\color{red} F$ | $\color{red} F$ |
| $\color{red} F$ | $\color{blue} T$ | $\color{blue} T$ | $\color{red} F$ | $\color{blue} T$ | $\color{blue} T$ | $\color{red} F$ |
| $\color{red} F$ | $\color{red} F$ | $\color{blue} T$ | $\color{red} F$ | $\color{red} F$ | $\color{blue} T$ | $\color{blue} T$ |

:::caption
**Figure 1.1** Truth table for the five most common logical connectives.
:::

::::


:::::div{.examples}

### Example 1.1

Consider another possible logical connective, the **NAND (not and) gate**, which has the following truth table:

| $P\quad$ | $Q\quad$ | $P \wedge Q$ | $\neg (P \wedge Q)$ |
| - | - | - | - |
| $\color{blue} T$ | $\color{blue} T$ | $\color{blue} T$ | $\color{red} F$ |
| $\color{blue} T$ | $\color{red} F$ | $\color{red} F$ | $\color{blue} T$ |
| $\color{red} F$ | $\color{blue} T$ | $\color{red} F$ | $\color{blue} T$ |
| $\color{red} F$ | $\color{red} F$ | $\color{red} F$ | $\color{blue} T$ |

It turns out that the NAND gate is **universal**, meaning that it can be used to implement any other logical connective. 

::::details{.exercise}

:summary[**Exercise 1.1** Use the NAND gate to derive all the logical connectives in Figure 1.1. Once you've derived a connective, you can use it in subsequent derivations.]{}

::::

:::::

# First-Order Logic



# Computability



# Incompleteness