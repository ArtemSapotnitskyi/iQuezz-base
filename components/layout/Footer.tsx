export const Footer = () => {
  return (
    <footer className="container py-6">
      <div className="flex justify-between">
        {/* Name tag */}
        <h5>Copyright © 2025 StuQuiz</h5>
        <div className="font-bold">
          <h5>
            All Rights Reserved |{" "}
            <span className="text-purple-500 cursor-pointer hover:opacity-85 transition-opacity ease-in-out">
              Terms and Conditions
            </span>{" "}
            |{" "}
            <span className="text-purple-500 cursor-pointer hover:opacity-85 transition-opacity ease-in-out">
              Privacy Policy
            </span>
          </h5>
        </div>
      </div>
    </footer>
  );
};
