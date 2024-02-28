// Used ChatGPT to help render JSON data
export default function Report(props) {
    return (
      <pre className="flex justify-center">
        {JSON.stringify(props.reply, null, 2)}
      </pre>
    );
  }