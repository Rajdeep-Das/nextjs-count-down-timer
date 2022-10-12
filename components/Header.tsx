interface msgProps {
  message: string,
};



export const Header = ({ message }: msgProps) => {
  return (
    <header className="mx-auto mt-2">
      <h1 className="font-extrabold text-transparent text-6xl bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600 mt-8">
        {message ? message : "We're Starting Soon"}
      </h1>
      
    </header>
  )
}