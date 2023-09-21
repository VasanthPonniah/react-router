import { Link, useSubmit } from 'react-router-dom';
import classes from './EventItem.module.css';

function EventItem({ event }) {
  const submit = useSubmit() // this will give you a submit function..  

  function startDeleteHandler() {
    const proceed = window.confirm("Are you sure that you want to delete this event ?") // this will return a boolean..
    if (proceed) {
      console.log(proceed)
      submit(null, { method: "DELETE" }) // submit gets two things as parameters one is the value and another is request
      // here we dont need any value regarding an event being deleted..
    }
  }

  return (
    <article className={classes.event}>
      <img src={event.image} alt={event.title} />
      <h1>{event.title}</h1>
      <time>{event.date}</time>
      <p>{event.description}</p>
      <menu className={classes.actions}>
        <Link to="edit">Edit</Link>
        <button onClick={startDeleteHandler}>Delete</button>
      </menu>
    </article>
  );
}

export default EventItem;
