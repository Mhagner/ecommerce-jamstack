module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', 'd9a3d186e5c82322b66d0d34b588ce79'),
  },
});
