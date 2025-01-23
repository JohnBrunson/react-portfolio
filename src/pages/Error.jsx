import { useRouteError } from 'react-router-dom';

export default function ErrorPage() {
  const error = useRouteError();
  console.error(error);

  return (
    <div id="error-page">
      <h1 className='raleway-body'>Oops!</h1>
      <p className='raleway-body'>Sorry, an unexpected error has occurred.</p>
      <p className='raleway-body'>
        <i className='raleway-body'>{error.statusText || error.message}</i>
      </p>
    </div>
  );



}
