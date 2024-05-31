// src/components/Article.js
import React from 'react';

function Article({ title, date = "January 1, 1970", preview, minutes }) {
  const coffeeCup = "☕️";
  const bentoBox = "🍱";
  const minutesToRead = minutes < 30
    ? coffeeCup.repeat(Math.ceil(minutes / 5))
    : bentoBox.repeat(Math.ceil(minutes / 10));

  return (
    <article>
      <h3>{title}</h3>
      <small>{date} • {minutesToRead} {minutes} min read</small>
      <p>{preview}</p>
    </article>
  );
}

export default Article;
