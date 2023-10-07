import logoGithubSrc from '../assets/github.svg';
import linkData from '../data/linkData';

function Footer() {
  return (
    <footer className="footer">
      <a className="link" href={linkData.github}>
        <img
          className="link__image link__image_type_github"
          src={logoGithubSrc}
          alt="GitHub"
        />
      </a>
      
      <p className="copyright">
        © Copyright
        {' '}
        <a
          href={linkData.linkedin}>
          Sergey Ladorski
        </a>
        <span className="copyright__year">
          {' '}
          {new Date().getFullYear()}
        </span>
      </p>
    </footer>
  )
}

export default Footer
