// -- getByRole

const button1 = getByRole("button", { name: /submit/i });
expect(button1).toBeInTheDocument();

// -- queryByRole

const button2 = queryByRole("button", { name: /submit/i });
expect(button2).toBeInTheDocument();
// or checking for absence
const button3 = queryByRole("button", { name: /submit/i });
expect(button3).not.toBeInTheDocument();

// -- await findByRole

const button = await findByRole("button", { name: /submit/i });
expect(button).toBeInTheDocument();
