"use client"
import React, { useState, useEffect } from "react";

interface Comment {
  id: string; // Unique identifier for each comment
  username: string; // Name of the user
  text: string; // The comment text
}

const CommentSection: React.FC = () => {
  // States for managing comments, new comment text, and username input
  const [comments, setComments] = useState<Comment[]>([]);
  const [newComment, setNewComment] = useState<string>("");
  const [username, setUsername] = useState<string>("");

  // Load comments from local storage when the component mounts
  useEffect(() => {
    const storedComments = localStorage.getItem("comments");
    if (storedComments) {
      setComments(JSON.parse(storedComments));
    }
  }, []);

  // Save comments to local storage whenever the comments state changes
  useEffect(() => {
    localStorage.setItem("comments", JSON.stringify(comments));
  }, [comments]);

  // Add a new comment to the list
  const addComment = () => {
    if (username.trim() && newComment.trim()) {
      const comment: Comment = {
        id: Date.now().toString(),
        username: username,
        text: newComment,
      };
      setComments([...comments, comment]);
      setNewComment("");
      setUsername("");
    }
  };

  // Delete a comment by its ID
  const deleteComment = (id: string) => {
    setComments(comments.filter((comment) => comment.id !== id));
  };

  return (
    <div className="max-w-3xl mx-auto p-4 bg-gray-100 shadow rounded-lg mt-10">
      <h2 className="text-2xl font-bold mb-4 text-center">Comment Section</h2>

      {/* Input fields for username and comment */}
      <div className="mb-6">
        <input
          type="text"
          placeholder="Enter your name"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className="w-full p-2 mb-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
        <textarea
          placeholder="Write a comment..."
          value={newComment}
          onChange={(e) => setNewComment(e.target.value)}
          className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
          rows={3}
        />
        <button
          onClick={addComment}
          className="w-full bg-blue-500 text-white px-4 py-2 mt-3 rounded-lg hover:bg-blue-600 transition"
        >
          Save
        </button>
      </div>

      {/* Display the list of comments */}
      <ul className="space-y-4">
        {comments.map((comment) => (
          <li
            key={comment.id}
            className="flex flex-col gap-2 bg-white p-4 rounded-lg shadow"
          >
            <div className="flex justify-between items-center">
              <span className="text-blue-600 font-semibold">{comment.username}</span>
              <button
                onClick={() => deleteComment(comment.id)}
                className="text-red-500 hover:text-red-600 transition"
              >
                Delete
              </button>
            </div>
            <p className="text-gray-700">{comment.text}</p>
          </li>
        ))}
      </ul>

      {/* Display a message if no comments are present */}
      {comments.length === 0 && (
        <p className="text-center text-gray-500 mt-4">No comments yet. Be the first to comment!</p>
      )}
    </div>
  );
};

export default CommentSection;
