import React, {Component} from 'react';
import LoginForm from './login-form';

export default function LoginPage() {
    return (
      <section className="login-section">
        <div className="heading">
          <h1>Welcome to Quizful</h1>
          <p>
            A community driven quiz made by Thinkful students, for Thinkful students.
          </p>
        </div>
        <LoginForm />
      </section>
    )
}
