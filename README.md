# Assignment-WP2

##  Project Overview

This Angular application demonstrates modern web development practices including:

- **Client-side navigation** with Angular Router
- **API data consumption** using HTTP Client and Angular Services
- **Reactive forms** with comprehensive validation
- **Responsive design** with modern CSS
- **Angular 20 features** including zoneless change detection

## Technologies Used

- **Angular 20.1.0** - Latest Angular framework
- **TypeScript** - Type-safe JavaScript
- **RxJS** - Reactive programming with Observables
- **Angular Router** - Client-side navigation
- **Reactive Forms** - Form handling and validation
- **HTTP Client** - API communication
- **CSS3** - Modern styling and responsive design

## Features

### Pages

1. **Home Page**
   - Landing page with project information
   - Feature highlights and navigation

2. **API Data Page**
   - Consumes JSONPlaceholder API
   - Displays Posts and Users in tabbed interface
   - Loading states and error handling
   - Responsive grid layouts

3. **Contact Form Page**
   - Reactive form with 5 fields
   - Comprehensive validation (required, email, phone pattern)
   - Real-time error messages
   - Form submission handling

###  Components

- **AppComponent** - Root component with navigation
- **HomeComponent** - Landing page
- **ApiDataComponent** - API data display with tabs
- **ContactFormComponent** - Reactive form with validation

### Services

- **DataService** - HTTP client service for API communication
  - `getPosts()` - Fetches posts from JSONPlaceholder
  - `getUsers()` - Fetches users from JSONPlaceholder
  - `getPost(id)` - Fetches single post by ID
