# Go back docs

1. В місці, де ми відправляємо людину на якусь сторінку створюємо об'єкт локації
   `const location = useLocation()`
1. Передаємо разом з лінкою стейт нашої локації

```
<Link state={{ from: location }} to={post.id.toString()}>
		{post.title}
	</Link>
```

1. В компоненті, котрий буде показуватись в результаті переходу створюємо об'єкт локації і реф

   ```
   const location = useLocation()
   const goBackRef = useRef(location.state?.from)
   ```

1. В цьому ж компоненті передаємо наш реф в лінк
   `<Link to={goBackRef.current}>Go back</Link>`

```

```

```

```
