# List of N+1 integers between 1 and N.

def find_duplicate(lst):
    """
    >>> find_duplicate([1,2,3,2])
    2
    >>> find_duplicate([2,3,4,3,1])
    3
    """
    return find_duplicate_helper(lst, 1, len(lst) - 1)

def find_duplicate_helper(lst, low, high):
    if low == high:
        return low
    mid = (high + low) / 2
    low_bucket = 0
    high_bucket = 0
    for num in lst:
        if num >= low and num <= mid:
            low_bucket += 1
        elif num > mid and num <= high:
            high_bucket += 1


    low_max = mid - low + 1

    if low_bucket > low_max:
        return find_duplicate_helper(lst, low, mid)
    else:
        if low == mid:
            return high
        else:
            return find_duplicate_helper(lst, mid, high)
