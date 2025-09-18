import { Link, useNavigate } from "react-router-dom"; // 1. Import useNavigate

export default function JoinAsArtisan() {
  // 2. Initialize the navigate function
  const navigate = useNavigate();

  // 3. Create a function to handle the form submission
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    // Prevents the browser from reloading the page
    event.preventDefault(); 
    
    // In a real app, you would send the form data to a server here.
    // For our prototype, we'll just log it to the console.
    console.log("Form submitted!");

    // 4. Redirect the user to the workspace page after they submit!
    navigate("/workspace");
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-background">
      <div className="w-full max-w-md p-8 space-y-8 bg-card rounded-lg shadow-lg border">
        <div className="text-center">
          <h1 className="text-3xl font-bold text-card-foreground">Join as an Artisan</h1>
          <p className="text-muted-foreground">Create your account and start your journey with CraftAI.</p>
        </div>
        
        {/* 5. Attach the handleSubmit function to the form's onSubmit event */}
        <form className="space-y-6" onSubmit={handleSubmit}>
          <div>
            <label htmlFor="name" className="text-sm font-medium text-card-foreground">Full Name</label>
            <input
              id="name"
              name="name"
              type="text"
              required
              className="w-full px-3 py-2 mt-1 border rounded-md bg-transparent focus:outline-none focus:ring-2 focus:ring-primary"
              placeholder="Your Full Name"
            />
          </div>
          <div>
            <label htmlFor="email" className="text-sm font-medium text-card-foreground">Email Address</label>
            <input
              id="email"
              name="email"
              type="email"
              required
              className="w-full px-3 py-2 mt-1 border rounded-md bg-transparent focus:outline-none focus:ring-2 focus:ring-primary"
              placeholder="you@example.com"
            />
          </div>
          <div>
            <label htmlFor="password" className="text-sm font-medium text-card-foreground">Password</label>
            <input
              id="password"
              name="password"
              type="password"
              required
              className="w-full px-3 py-2 mt-1 border rounded-md bg-transparent focus:outline-none focus:ring-2 focus:ring-primary"
              placeholder="••••••••"
            />
          </div>
          <div>
            {/* 6. Make sure the button has type="submit" */}
            <button type="submit" className="w-full py-2 text-white bg-primary rounded-md hover:bg-primary/90 transition-colors">
              Create Account
            </button>
          </div>
        </form>

        <p className="text-sm text-center text-muted-foreground">
          Already have an account?{" "}
          <Link to="/signin" className="font-medium text-primary hover:underline">
            Sign In
          </Link>
        </p>
      </div>
    </div>
  );
}

