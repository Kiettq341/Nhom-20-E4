

# Quản lý người dùng & Blog

Bài tập mẫu: Xây dựng web quản lý user và blog (Vue 3 + Node.js). Có đăng nhập, CRUD user/blog, upload, tìm kiếm, sắp xếp.

Cài đặt:
- `npm install` rồi `npm run dev` (frontend)
- `cd backend && node server.js` (backend)

5. **Run the linter:**

```bash
npm run lint
```

## Project Structure

```bash
├── public/             # Static assets (favicon, icons, etc.)
├── src/
│   ├── assets/         # Images, icons, and other assets
│   ├── components/     # Reusable Vue components (UserSidebar, UserDetails, UserModal, etc.)
│   ├── apis/           # Axios API calls for user management
│   ├── styles/         # SCSS files for styling and mixins
│   ├── views/          # View components (e.g., HomePage.vue)
│   ├── App.vue         # Root component
│   └── main.js         # Entry point
├── package.json        # Project metadata and npm scripts
└── vue.config.js       # Vue3 configuration
```

## Features in Detail

### Sidebar Navigation

- The sidebar provides navigation between users. It collapses into a floating sidebar on small screens and can be toggled using a menu icon.

### Modals for Adding/Editing Users

- A modal interface allows users to add or edit user details with validation. The modal form checks if all required fields are filled before enabling the submit button.

### Responsive Design

- Custom SCSS mixins allow for dynamic adjustments to screen size. The sidebar and user details section are fluid, and the design adapts to mobile, tablet, and desktop devices.

### Axios API Integration

- Axios is used for fetching user data and making HTTP requests to the backend, ensuring a smooth interaction with the server.

## SCSS Mixins and Breakpoints

The project includes custom SCSS mixins for breakpoints:

```scss
// styles/_mixins.scss

$large: 1400px;
$medium: 1024px;
$small: 375px;

@mixin sm {
  @media (min-width: #{$small}) {
    @content;
  }
}

@mixin max-sm {
  @media (max-width: #{$small}) {
    @content;
  }
}

@mixin md {
  @media (min-width: #{$medium}) {
    @content;
  }
}

@mixin max-md {
  @media (max-width: #{$medium}) {
    @content;
  }
}

@mixin lg {
  @media (min-width: #{$large}) {
    @content;
  }
}

@mixin max-lg {
  @media (max-width: #{$large}) {
    @content;
  }
}
```

## API Endpoints

The following API endpoints are used in this project (replace with actual backend endpoints):

- **GET /users**: Fetch all users.
- **POST /users**: Add a new user.
- **PUT /users/:id**: Update a user.

## Future Improvements

- **Authentication**: Add user authentication (login/register functionality).
- **Pagination**: Implement pagination for large user datasets.
- **Testing**: Write unit and integration tests using Vue Test Utils or Jest.

## Contributing

Contributions are welcome! To contribute:

1. Fork the repository.
2. Create a new feature branch: `git checkout -b feature-name`.
3. Commit your changes: `git commit -m 'Add some feature'`.
4. Push to the branch: `git push origin feature-name`.
5. Submit a pull request.

## License

This project is licensed under the MIT License.