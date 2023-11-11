# __[rsschool-cv](https://Gromov-Roman.github.io/rsschool-cv/)__

# __Roman Gromov__

## __Contacts__
- __Location:__ Tashkent, Uzbekistan
- __Email:__ gromov.r.v.92@gmail.com
- __LinkedIn:__ [Roman Gromov](https://www.linkedin.com/in/r-gromov/)
- __GitHub:__ [Roman Gromov](https://github.com/Gromov-Roman)

## __About Me__:

I am a dedicated and results-driven IT professional with a Specialist degree in IT software and computerized systems from Ivanovo State Power Engineering University. With a solid educational background, I have been working as a Frontend Developer since 2016, specializing in the Angular framework.

Professional Background:
In my role as a Frontend Developer, I have honed my skills in delving deep into tasks and crafting efficient solutions. I prioritize business goals and tasks, paying meticulous attention to detail and user experience. I have an ability to write simple yet effective code.

### __Key Skills__:

In-depth problem-solving skills
Efficient and clean code writing
Business-oriented task prioritization
Keen attention to detail and user experience (UX/UI)

### __Personal Qualities__:

My professional journey is marked by qualities such as determination, consistency, and effectiveness. I excel in establishing effective communication with diverse teams, fostering a collaborative working environment.

### __Achievements__:

A notable accomplishment in my career includes a threefold improvement in page loading speed. This achievement was realized through my analysis of the project build and the implementation of custom solutions, replacing heavy libraries.

I am enthusiastic about contributing my skills and expertise to dynamic projects, consistently striving for excellence in every task. My goal is to continue making impactful contributions to the field of IT development.

## __Skills__
- JS, TS
- HTML, CSS/SASS
- Angular
- Git, Webpack, npm

## __Code Example__
<details><summary>Free and simplified interpretation of V8 sorting</summary>

```
const qsInsertionSort = (arr, left, right) => {
    for (let i = left + 1; i < right; i++) {
        let sorted = i - 1;

        while (sorted >= 0 && arr[sorted] > arr[sorted + 1]) {
            swap(arr, sorted, sorted + 1);
            sorted--;
        }
    }

    return arr;
};

const qsPartition = (arr, left, right) => {
    let first = left;
    let middle = left + ((right - left) >> 1);
    let last = right;

    if (arr[first] > arr[last]) swap(arr, first, last);
    if (arr[middle] > arr[first]) swap(arr, first, middle);
    else if (arr[middle] > arr[last]) swap(arr, middle, last);

    let pivot = arr[middle];

    while (left <= right) {
        while (arr[left] < pivot) left++;
        while (arr[right] > pivot) right--;

        if (left <= right) {
            swap(arr, left, right);

            left++;
            right--;
        }
    }
    return left;
};

const quickSort = (arr, start = 0, end = arr.length - 1) => {
    while (true) {
        if (start >= end) return;

        if (arr.length <= 10) {
            return qsInsertionSort(arr, start, end);
        }

        const rightStart = qsPartition(arr, start, end);

        if (rightStart - 1 - start < end - rightStart) {
            quickSort(arr, start, rightStart - 1);
            start = rightStart;
        } else {
            quickSort(arr, rightStart, end);
            end = rightStart - 1;
        }
    }
};
```
</details>

## __Experience__
In frontend since 2016

## __Education__
__University:__ Ivanovo State Power Engineering UniversityIvanovo State Power Engineering University
  Specialist degree, IT software and computerized systems

## __English__
__A2-B1__
